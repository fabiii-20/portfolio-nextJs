import React, { useEffect } from 'react'

const skills = [
    {
        title:'Frontend',
        skills:[
            'React',
            'Nextjs',
            'Tailwind CSS',
            'Redux',
            'Typescript',

        ]
    },
    {
        title:'Backend',
        skills:[
            'Nestjs',
            'Nodejs',
            'Expressjs',
            'MongoDB',
            'PostgreSQL',
            'Firebase',
            'Python'
        ]
    },
    {
        title:'Hosting',
        skills:[
            'Git',
            'Github',
            'Netlify',
            'Heroku'  
        ]
    },

]



// Example usage

export default function Skills() {
    function randomPastelHex() {
        const hue = Math.floor(Math.random() * 360); // Random hue
        const saturation = Math.floor(Math.random() * 30) + 70; // Saturation between 70% and 100%
        const lightness = Math.floor(Math.random() * 20) + 80; // Lightness between 80% and 100%
        return hslToHex(hue, saturation, lightness);
    }
    
    function hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = (n) => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }
  return (
    <div className="relative p-4 sm:p-10 sm:pt-16" id="skills">
               <div className=''>

        <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-black dark:text-white  pt-6 ">Skills</h2>
       {/* <FadeIn> */}
            {skills.map((skill,index)=><div key={`skill-${index}`} className='flex  w-full flex-row justify-between sm:gap-x-6 items-center lg:items-start my-10'>
                <div className=' flex flex-col justify-between items-start'>
                    <h1 className='text-lg sm:text-2xl dark:text-gray-400 text-gray-600 hover:text-gray-900 transition-all duration-300 cursor-pointer  tracking-tight font-semibold mb-2 '>{skill.title}</h1>
                    <div className='flex flex-wrap gap-x-2 gap-y-4'>                    {skill.skills.map((skill,sIndex)=><div 
                    // style={{background:randomPastelHex()}}
                    key={`skillsub-${sIndex}`}
                     className={`text-md sm:text-lg tracking-tight bg-blue-100 hover:bg-blue-200 transition-all duration-300 cursor-pointer text-black rounded-xl px-4 py-2 border border-black  `}> 

                     {skill}
                     </div>)}
</div>
                    </div></div>)}
       {/* </FadeIn> */}
       </div>

    </div>
  )
}
