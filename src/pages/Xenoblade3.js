import './Xenoblade3.css';
import Character from '../components/Character';
import xeno3img from '../images/xeno3logo.png'
export default function Xeno3() {

    return(

  <div className='pagebody'>
    <div className='navBar'>
      
    </div>

  <div className='logo3-container'>
    <img src={xeno3img} className='xenoblade3-logo'/>
  </div>

  <div className='characters-container'>
    <Character image="https://noisypixel.net/wp-content/uploads/2022/07/FYw_3kraQAEVmxw.png.webp"
    name={"Noah"}
    class_name={"Swordfighter"}
    class_logo={"https://j-img.game8.co/7028729/348b805266b57bc5399d9d773a8c4232.png/show"}
    description={"As a Keves soldier, he wields a bright red blade in combat. He is also an “off-seer”—someone who ferries the souls of fallen soldiers back to their Queen."}/>

    <Character image={"https://nintheorist.files.wordpress.com/2022/07/img_1611.jpeg?w=1140&h=1383"}
    name={"Mio"}
    class_name={"Zephyr"}
    class_logo={"https://j-img.game8.co/7028721/fbf518b14f68ce77f30013c9ec9fd462.png/show"}
    description={"Her speed on the battlefield allows her to easily evade attacks while dealing damage with her ring-shaped weapons. Like Noah, Mio is an “off-seer."}/>

    <Character image={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTrTUa23GiwGHwKCNsObgO3DBk-WnVRhgse9O8eJy1P6BYV27mV"}
    name={"Eunie"}
    class_name={"Medic Gunner"}
    class_logo={"https://j-img.game8.co/7028726/e32eb7085f7da709251f2dafb73f4526.png/show"}
    description={"A soldier of Keves who fights alongside her childhood friends Noah and Lanz. Equipped with a cane-shaped weapon called a Gunrod, Eunie is quick to heal up any allies in need."}/>

    <Character image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6ZqZGBpeOVobPlU39hGUwXcJSzsyqBmCcTZwpItDu-1bDHz4"}
    name={"Taion"}
    class_name={"Tactitian"}
    class_logo={"https://j-img.game8.co/7028722/6823332e01ab4fac7d79fae212332668.png/show"}
    description={"A soldier of Agnus who commands paper-like weapons. He acts as a tactician on the battlefield, using his smarts and intellect to support his allies."}/>

    <Character image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf61SOr8FJa4DseTPmCQT4_2nLHhvN0CV9yISA_JJZA9XD5aA8"}
    name={"Lanz"}
    class_name={"Heavy Guard"}
    class_logo={"https://j-img.game8.co/7028727/7d6e86eb16517658580f37be45a73929.png/show"}
    description={"A childhood friend of Noah and a fellow Keves soldier. His strength allows him to wield a large sword that doubles as a shield."}/>

    <Character image={"https://i1.max-c.com/imgx/2022/07/11/3772ddadedb2459b87e0a755f89199621657555544"}
    name={"Sena"}
    class_name={"Ogre"}
    class_logo={"https://j-img.game8.co/7028731/2476e7123d8bd83e931e78872cfa254d.png/show"}
    description={"This pint-sized soldier of Agnus possesses outsized strength to wallop foes with her giant hammer."}/>
  </div>
</div>

    )
};