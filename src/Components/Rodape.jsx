import style from "../css/Rodape.module.css";
import intagram from '../imagens/insta.jfif'
import facebook from '../imagens/face.jfif'
import tiktok from '../imagens/tiktok.png'
import whats from '../imagens/whtas.png'

function Rodape() {
  return (
    <div className={style.boxrodape}>
      <div>
        <h6 className={style.nosiga}>
          Siga-nos nas redes sociaias
        </h6>
        <div className={style.boximgsfooter}>
          <img className={style.imgsf1} src={intagram} alt="" />
          <img className={style.imgsf1} src={facebook} alt="" />
          <img className={style.imgsf1} src={tiktok}alt="" />
          <img className={style.imgsf} src={whats}alt="" />
        </div>
        <h4>
          Tipos de contato:(11)9999-9999
        </h4>
      </div>
    </div>
  );
}

export default Rodape;
