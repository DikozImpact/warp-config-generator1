async function generateConfig() {
    const button = document.getElementById('generateButton');
    const button_text = document.querySelector('#generateButton .button__text');
    const status = document.getElementById('status');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:text/plain;base64,' + data.content;
                link.download = `WARPp_${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPp_${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
}

async function generateConfig2() {
    const button = document.getElementById('generateButton2');
    const button_text = document.querySelector('#generateButton2 .button__text');
    const status = document.getElementById('status');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp2`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:text/plain;base64,' + data.content;
                link.download = `KaringWARP_${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать KaringWARP_${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
}

async function generateConfig3() {
    const button = document.getElementById('generateButton3');
    const button_text = document.querySelector('#generateButton3 .button__text');
    const status = document.getElementById('status');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp3`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:text/plain;base64,' + data.content;
                link.download = `WARPinWARP_${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPinWARP_${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
}

async function generateConfig4() {
    const button = document.getElementById('generateButton4');
    const button_text = document.querySelector('#generateButton4 .button__text');
    const status = document.getElementById('status');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp4`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:text/plain;base64,' + data.content;
                link.download = `WARPr_${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPr_${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
}

async function generateConfig5() {
    const button = document.getElementById('generateButton5');
    const button_text = document.querySelector('#generateButton5 .button__text');
    const status = document.getElementById('status');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp5`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:text/plain;base64,' + data.content;
                link.download = `NekoWARP_${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать NekoWARP_${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
}

async function generateConfig6() {
    const button = document.getElementById('generateButton6');
    const button_text = document.querySelector('#generateButton6 .button__text');
    const status = document.getElementById('status');
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

    // Изменяем состояние кнопки на загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch(`/warp6`);
        const data = await response.json();

        if (data.success) {
            const downloadFile = () => {
                const link = document.createElement('a');
                link.href = 'data:text/plain;base64,' + data.content;
                link.download = `WARPm_${randomNumber}.conf`;
                link.click();
            };

            button_text.textContent = `Скачать WARPm_${randomNumber}.conf`;
            button.onclick = downloadFile;
            downloadFile();
        } else {
            status.textContent = 'Ошибка: ' + data.message;
        }
    } catch (error) {
        status.textContent = 'Произошла ошибка при генерации.';
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
}

document.getElementById('generateButton2').onclick = generateConfig2;
document.getElementById('generateButton3').onclick = generateConfig3;
document.getElementById('generateButton4').onclick = generateConfig4;
document.getElementById('generateButton5').onclick = generateConfig5;
document.getElementById('generateButton6').onclick = generateConfig6;


document.getElementById('generateButton').onclick = generateConfig;

document.getElementById('telegramButton').onclick = function() {
    window.location.href = 'https://t.me/warp_1_1_1_1';
}

document.getElementById('DonationAlertsButton').onclick = function() {
    window.location.href = 'https://www.donationalerts.com/r/warphelp';
}

document.getElementById('BoostyNewButton').onclick = function() {
    window.location.href = 'https://boosty.to/warphelp/donate';
}

document.getElementById('BoostyButton').onclick = function() {
    // Скрываем текущую кнопку
  this.style.display = 'none';

  // Показываем новые кнопки
  document.getElementById('newButtons').style.display = 'block';
}

document.getElementById('githubButton').onclick = function() {
    window.location.href = 'https://docs.google.com/document/d/1DX4X7t7V4QasQJYbps5D1yNtsK7tqsouSMJH2w4AMOY';
}
