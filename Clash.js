const fetch = require('node-fetch');
const nacl = require('tweetnacl');
const { Buffer } = require('buffer');
const wnacl = require('tweetnacl');
const { wBuffer } = require('buffer');

function generateKeys() {
    const keyPair = nacl.box.keyPair();
    return {
        privKey: Buffer.from(keyPair.secretKey).toString('base64'),
        pubKey: Buffer.from(keyPair.publicKey).toString('base64')
    };
}
 
function wgenerateKeys() {
    const wkeyPair = nacl.box.keyPair();
    return {
        wprivKey: Buffer.from(wkeyPair.secretKey).toString('base64'),
        wpubKey: Buffer.from(wkeyPair.publicKey).toString('base64')
    };
}

// Функция для отправки запросов к API Cloudflare
async function apiRequest(method, endpoint, body = null, wtoken = null) {
    const headers = {
        'User-Agent': '',
        'Content-Type': 'application/json',
    };

    if (wtoken) {
        headers['Authorization'] = `Bearer ${wtoken}`;
    }

    const options = {
        method,
        headers,
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`https://api.cloudflareclient.com/v0i1909051800/${endpoint}`, options);
    return response.json();
}

async function wapiRequest(method, endpoint, body = null, token = null) {
    const headers = {
        'User-Agent': '',
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const options = {
        method,
        headers,
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const wresponse = await fetch(`https://api.cloudflareclient.com/v0i1909051800/${endpoint}`, options);
    return wresponse.json();
}

async function generateWarpConfig() {
    const { privKey, pubKey } = generateKeys();

    // Регистрация устройства
    const regBody = {
        install_id: "",
        tos: new Date().toISOString(),
        key: pubKey,
        fcm_token: "",
        type: "ios",
        locale: "en_US"
    };
    const regResponse = await apiRequest('POST', 'reg', regBody);

    const id = regResponse.result.id;
    const token = regResponse.result.token;

    // Включение WARP
    const warpResponse = await apiRequest('PATCH', `reg/${id}`, { warp_enabled: true }, token);

    const peer_pub = warpResponse.result.config.peers[0].public_key;
    const client_ipv4 = warpResponse.result.config.interface.addresses.v4;
    const client_ipv6 = warpResponse.result.config.interface.addresses.v6;

    const reserved64 = warpResponse.result.config.client_id;
    const reservedHex = Buffer.from(reserved64, 'base64').toString('hex');
    const reservedDec = reservedHex.match(/.{1,2}/g).map(hex => parseInt(hex, 16)).join(', ');
    const reservedHex2 = '0x' + reservedHex;

const { wprivKey, wpubKey } = wgenerateKeys();
// Регистрация устройства
    const wregBody = {
        install_id: "",
        tos: new Date().toISOString(),
        key: wpubKey,
        fcm_token: "",
        type: "ios",
        locale: "en_US"
    };
 const wregResponse = await wapiRequest('POST', 'reg', wregBody);
    const wid = wregResponse.result.id;
    const wtoken = wregResponse.result.token;
    // Включение WARP
    const wwarpResponse = await wapiRequest('PATCH', `reg/${wid}`, { warp_enabled: true }, wtoken);
    const wpeer_pub = wwarpResponse.result.config.peers[0].public_key;
    const wclient_ipv4 = wwarpResponse.result.config.interface.addresses.v4;
    const wclient_ipv6 = wwarpResponse.result.config.interface.addresses.v6;
    const wreserved64 = wwarpResponse.result.config.client_id;
    const wreservedHex = Buffer.from(wreserved64, 'base64').toString('hex');
    const wreservedDec = wreservedHex.match(/.{1,2}/g).map(hex => parseInt(hex, 16)).join(', ');
    const wreservedHex2 = '0x' + wreservedHex;
   

    // Формируем конфиг
    const conf = `proxies: 
- name: "WARP_"
  type: wireguard
  private-key: ${privKey}
  server: 188.114.96.0
  port: 500
  ip: ${client_ipv4}
  public-key: ${peer_pub}
  allowed-ips: ['0.0.0.0/0']
  reserved: [${reservedDec}]
  udp: true
  mtu: 1280
  remote-dns-resolve: true
  dns: [1.1.1.1, 1.0.0.1]
  amnezia-wg-option:
   jc: 120
   jmin: 23
   jmax: 911
   s1: 0
   s2: 0
   h1: 1
   h2: 2
   h4: 3
   h3: 4
   
- name: "WARP in WARP_"
  dialer-proxy: WARP_
  type: wireguard
  private-key: ${wprivKey}
  server: 188.114.97.170
  port: 1018
  ip: ${wclient_ipv4}
  public-key: ${peer_pub}
  allowed-ips: ['0.0.0.0/0']
  reserved: [${wreservedDec}]
  udp: true
  mtu: 1200
  remote-dns-resolve: true
  dns: [1.1.1.1, 1.0.0.1]
  
proxy-groups: 
- name: WARP
  type: select
  icon: https://developers.cloudflare.com/_astro/logo.p_ySeMR1.svg
  proxies:
    - WARP_
  url: 'http://speed.cloudflare.com/'
  interval: 300
- name: WARP in WARP
  type: select
  icon: https://developers.cloudflare.com/_astro/logo.p_ySeMR1.svg
  proxies:
    - WARP in WARP_
  url: 'http://speed.cloudflare.com/'
  interval: 300`;

    // Возвращаем конфиг
    return conf;
}

// Основная функция для генерации ссылки на скачивание конфига
async function getWarpConfigLink7() {
    try {
        const conf = await generateWarpConfig();
        const confBase64 = Buffer.from(conf).toString('base64');
        return `${confBase64}`;
    } catch (error) {
        console.error('Ошибка при генерации конфига:', error);
        return null;
    }
}

// Экспортируем функцию для использования
module.exports = { getWarpConfigLink7 };
