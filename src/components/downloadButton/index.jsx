import "./style.css";

function DownloadButton() {
  function handleDownload() {
    window.open("http://localhost:3001/download/adoption");
  }

  return (
    <center>
      <div className="download-btn-container">
        <button onClick={handleDownload} className="download-btn">
          Baixar planilha de adoções
        </button>
      </div>
    </center>
  );
}

export default DownloadButton;
