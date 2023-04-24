import mala from '../imagens/mala.jpg'
import style from "../css/Home.module.css";
function Home() {
  return (
    <div className={style.boxHome}>
      <div className={style.boxmala}><img className={style.mala} src={mala} alt="" /></div>
      <div className={style.boxtexto}>
        <h5>
           Encontre aqui a viagem  <br/><span>dos seus sonhos!!</span> 
        </h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci exercitationem aliquid dolorem veniam sequi error natus vero officia, laboriosam beatae nemo sit voluptas numquam ab necessitatibus deleniti asperiores ex dolores! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates obcaecati consequuntur velit, error voluptatibus, laudantium dignissimos assumenda perferendis facilis corporis cupiditate ea! Perspiciatis enim itaque nisi voluptatum libero laborum delectus.
      </p>
      </div>
    </div>
  );
}

export default Home;
