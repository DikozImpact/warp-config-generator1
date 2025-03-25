// src/workers/index.js

import { getWarpConfigLink } from '../lib/AWGp';
import { getWarpConfigLink2 } from '../lib/Karing';
import { getWarpConfigLink3 } from '../lib/WarpInWarp';
import { getWarpConfigLink4 } from '../lib/AWGr';
import { getWarpConfigLink5 } from '../lib/Neko';
import { getWarpConfigLink6 } from '../lib/AWGm';
import { getWarpConfigLink7 } from '../lib/Clash';
import { getWarpConfigLink8 } from '../lib/Husi';

// Кэширование ответов на 5 минут
const CACHE_TTL = 300;

async function handleApiRequest(pathname) {
  try {
    let content;
    
    switch(pathname) {
      case '/warp':
        content = await getWarpConfigLink();
        break;
      case '/warp2':
        content = await getWarpConfigLink2();
        break;
      case '/warp3':
        content = await getWarpConfigLink3();
        break;
      case '/warp4':
        content = await getWarpConfigLink4();
        break;
      case '/warp5':
        content = await getWarpConfigLink5();
        break;
      case '/warp6':
        content = await getWarpConfigLink6();
        break;
      case '/warp7':
        content = await getWarpConfigLink7();
        break;
      case '/warp8':
        content = await getWarpConfigLink8();
        break;
      default:
        return new Response('Not Found', { status: 404 });
    }

    if (content) {
      return new Response(JSON.stringify({ 
        success: true, 
        content 
      }), {
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': `public, max-age=${CACHE_TTL}`
        }
      });
    } else {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Failed to generate config' 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Internal server error' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Обрабатываем API запросы
    if (url.pathname.startsWith('/warp')) {
      return handleApiRequest(url.pathname);
    }
    
    // Все остальные запросы перенаправляем к Pages
    // (это сработает после настройки маршрутизации)
    return fetch(request);
  }
}
