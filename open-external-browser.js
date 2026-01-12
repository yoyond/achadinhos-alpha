(function () {
  const ua = navigator.userAgent || navigator.vendor || window.opera;

  const isInApp =
    ua.includes("Instagram") ||
    ua.includes("FBAN") ||
    ua.includes("FBAV") ||
    ua.includes("TikTok") ||
    ua.includes("Twitter") ||
    ua.includes("Snapchat");

  if (!isInApp) return;

  // cria tela de instrução
  document.body.innerHTML = `
    <div style="
      display:flex;
      align-items:center;
      justify-content:center;
      height:100vh;
      font-family:Arial, sans-serif;
      text-align:center;
      padding:20px;
    ">
      <div>
        <h2>Abrir no navegador</h2>
        <p>
          Este link não funciona corretamente dentro deste app.
        </p>
        <p>
          Toque nos <b>três pontinhos (⋮)</b> e escolha<br>
          <b>“Abrir no navegador”</b>.
        </p>

        <button id="openBrowser" style="
          margin-top:20px;
          padding:14px 22px;
          font-size:16px;
          border:none;
          border-radius:6px;
          background:#000;
          color:#fff;
          cursor:pointer;
        ">
          Abrir agora
        </button>
      </div>
    </div>
  `;

  document.getElementById("openBrowser").onclick = function () {
    const url = window.location.href;

    // método mais aceito pelos in-app browsers
    const newWindow = window.open(url, "_blank");

    if (!newWindow) {
      alert(
        "Se nada acontecer, toque nos três pontinhos e escolha 'Abrir no navegador'."
      );
    }
  };
})();
