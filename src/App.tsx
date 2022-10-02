import './App.css';
import Logo from './img/logo.png'
import { Instagram } from 'react-feather';


function App() {
  return (
    <div className="App font-mono text-[15px] bg-white p-[20px] md:max-w-[950px] md:m-[5px] md:m-auto flex flex-col items-center justify-center text-[#575757]">

      <hr className='w-full bg-gray-200 h-[1.5px] visible md:invisible md:mt-[-24px]' />

      {/* Logo */}
      <div className='w-full h-[28px] mt-[30px] mb-[30px] flex justify-center items-center md:justify-start'>
        <img className='max-h-full max-w-full' src={Logo} alt='Belenko' />
      </div>

      <hr className='w-full bg-gray-200 h-[1.5px] mb-[24px]' />

      {/* Text */}
      <div className='w-full text-left break-words'>
        <code>
          DENYS BYELYENKO <br />
          Architect & Founder of Belenko Design <br />

          <br />
          <br />
          <br />

          www.belenko.design

          <br />
          <br />

          Telegram / Whatsapp: +38 067 489 61 93

          <br />
          <br />
          <br />
          <br />

          e-mail: studiobelenko@gmail.com

          <br />
          <br />

          Barcelona, Spain / Kyiv, Ukraine

          <br />
          <br />
          <br />
          <br />
          <br />

          Creating and fulfilling since 2000. <br /><br />
          Belenko crafts conceptual design. <br /><br />
          Philosophy. We envision the establishment's philosophy as a whole and in every detail, simultaneously. <br /><br />  
          can create a new design philosophy for an existing site or we can find an ideal space for an existing design.We <br /> <br /> 
          scale our philosophy down to kitchen-menu-dinnerware, not liming ourselves to floors, walls and furniture. <br /><br />
          Design/Functionality. We work exclusively with public spaces, having thoroughly studied the laws and rules <br /><br />
          behind their functionality. Through design we provide nonverbal cues for each area as well as for the entire <br /><br />
          space. <br /><br />
          Naming. The derivative of the philosophy, its integral part. More than a third of our projects still have the same<br /><br />
          name we came up with. <br /><br />
          Identity. Element of design and therefore we care. We develop all the elements, including the logo, fonts,<br /><br />
          menus, staff uniforms, signage and much more. <br /><br />
          
          * Our Rules and Principles<br /><br />

          Research. We begin our work on a new project with an astute analysis of trends and competition, location, <br /><br />

          traffic and other important factors that will affect popularity and, ultimately, success of the project. <br /><br />

          We do not copy or transfer successful ideas from one country or city to another. All our proposals are based <br /><br />

          on a thorough analysis of the context. <br /><br />

          Positioning. In many ways, choosing the right positioning determines the success of the project. Our <br /><br /> 
          
          conceptual approach to creating establishments is based precisely on this principle. We rely on Denis <br /><br />

          Belenko's analytical knowledge and unique intuition, which helps him to anticipate trends. <br /> <br />

          Trust. We appreciate our customers' trust. We put our own reputation and expertise to the test, in every <br /> <br />

          single project, because our overall goal is for projects to be commercially successful. We want the restaurants <br /><br /> 

          and cafes, which we have built with our own hands, to be fully booked every single day. <br /><br /> 

          Our interior designs are crafted for patrons and not for photographs in industry magazines. <br /><br />

          Expertise. We are experts in interior design, and we work only with other experts. We can vouch for every <br /><br />

          contractor we involve in the project. <br /><br />

          Architects, artists, designers, managers, decorators, carpenters, blacksmiths, glaziers, seamstresses,<br /><br />

          ceramists and other professionals help us to craft outstanding products.<br /><br />

          Inspiration. Scrolling through Instagram photos does not paint the full picture of a Tokyo market or a New <br /><br />
          
          York City bar. We tirelessly travel the world in search of inspiration and gladly share our findings with like-<br /><br />

          minded people. Often the best decisions are made during an inspirational trip.<br /><br />

          www.belenko.design<br /><br />
          A complete list of what we offer:<br /><br />
          • concept development;<br /><br />
          • putting together the interior design sketchbook;<br /><br />
          • crafting custom-built design elements;<br /><br />
          • field supervision in all aspects;<br /><br />
          • decorative and finishing work;<br /><br />
          • manufacturing and installation of furniture;<br /><br />
          • manufacturing of lighting fixtures;<br /><br />
          • selection and manufacturing of decorative elements, textiles and accessories;<br /><br />
          • identity development;<br /><br />
          • recommendations for music and ambience;<br /><br />
          • selection of contractors and suppliers.<br /><br />
          This time and time again proven scheme gives us confidence to claim this is the surest way to achieve<br /><br />
          success.<br /><br />
          FAQs:<br /><br />
          1. How is the work structured?<br /><br />
          − In order to get an accurate feeling for the proposed establishment, we travel to the site, get acquainted,<br /><br />
          study the local market, discuss the main aspects and technical constraints.<br /><br />
          − We write up a business proposal, stating objectives, implementation phases, costs and timeframe.<br /><br />
          − We develop the concept and present it.<br /><br />
          − We draw construction plans, pinpoint tasks and discuss their technical feasibility with the project manager<br /><br />
          and contractors.<br /><br />
          − We put together technical documentation for construction and utilities tasks at the site.<br /><br />
          − We carry out planned and necessary field supervision directly at the site, discuss technical details with<br /><br />
          contractors, supervise the construction and utilities work for project compliance.<br /><br />
          − We control the process and consult online, using cameras, Skype, email, WhatsApp and Viber.<br /><br />
          − We inspect the completed work by the contractor.<br /><br />
          − We do finishing work on the site.<br /><br />
          − Assemble furniture.<br /><br />
          − Add lighting and decor elements.<br /><br />
          − We prepare the establishment's opening.<br /><br />
          2. How long does it take to complete a project?<br /><br />
          - We spend a minimum of 1 month on concept development.<br /><br />
          - We spend a minimum of 1-2 months putting together the working draft.<br /><br />
          - We spend a minimum of 4 months on finishing work, manufacturing of furniture, light fixtures and décor<br /><br />
          elements.
        </code>
      </div>

      <hr className='w-full bg-gray-200 h-[1.5px] mb-[30px] mt-[30px]' />

      <div className='font-bold w-full flex justify-between mb-[12px]'>
        <div>
          Copyright © 2000 - 2022
        </div>

        <a target='_blank' href="https://www.instagram.com/belenko/">
          <Instagram />
        </a>

      </div>

    </div>
  );
}

export default App;
