const campoEmail = document.querySelector('#email');
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let campoErro = document.querySelector('#messageError');

function validarEmail() {
    let email = campoEmail.value;

    if (regex.test(email)) {
        document.getElementById('principal').innerHTML = `<div class="col">
        <div class="contentText successMessage ps-5 me-5 d-flex flex-column">
            <img src="src/images/icon-success.svg" class="my-5" alt="">
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <strong>${email}</strong>. 
                Please open it and click the button inside to confirm your subscription.</p>
            <button id="dismissBtn" class="successBtn my-5 py-3">Dismiss message</button>
        </div>
    </div>`;
        document.getElementById('dismissBtn').addEventListener('click', dismiss);
    } else {
        campoErro.className = 'errorMessage';
        campoErro.innerText = 'Valid email required'
        campoEmail.className = 'errorEmailArea px-3'
    }
}

function dismiss() {
    location.reload(); // Atualizar a página inteira
}

document.querySelector('#btn').addEventListener('click', validarEmail);

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('successBtn')) {
        dismiss();
    }
});
