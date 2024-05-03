'use client'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Keyframes } from "@/components/keyframes";
import Question from "@/components/Quiz";
import { useState } from "react";
import ContactForm from "@/components/FormContact";

const question = [
  {
    "question": "Qual é o objeto mais brilhante no céu noturno?",
    "options": ["A Lua","Vênus","A Estrela Polar","Marte"],
    "optionCorrect": "A Lua"
  },
  {
    "question": "Qual é a estrela mais próxima da Terra?",
    "options": ["Alfa Centauri","Sirius","Próxima Centauri","Betelgeuse"],
    "optionCorrect": "Próxima Centauri"
  },
  {
    "question": "Que fenômeno astronômico ocorre quando a Lua se interpõe entre a Terra e o Sol?",
    "options": ["Eclipse lunar","Eclipse solar","Eclipse de Lua cheia","Eclipse de Lua nova"],
    "optionCorrect": "Eclipse solar"
  },
  {
    "question": "Quantos planetas terrestres existem no sistema solar?",
    "options": ["4","7","3","6"],
    "optionCorrect": "4"
  }
]

export default function Home() {
	const [selectedOption, setSelectedOption] = useState(null);

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

<Keyframes name="top1" delay="6" 
						from={{ 
							top: '0px', 
            	opacity: 1 }} 
						to={{ top: '600px',
							right: '900px',
							opacity: 0.1 }} />

							<Keyframes name="top2" delay="8" 
						from={{ 
							top: '50px', 
            	opacity: 1 }} 
						to={{ top: '500px',
							right: '1400px',
							opacity: 0.1 }} />

<Keyframes name="top3" delay="20" 
						from={{ 
							top: '50px', 
            	opacity: .6,
						rotate: '300px'
					}} 
						to={{ top: '800px',
							left: '1400px',
							opacity: 0.1 }} />

			<img src="https://png.pngtree.com/png-clipart/20220109/original/pngtree-blue-purple-shooting-star-png-image_7026887.png" 
			className="top1 absolute top-0 right-0" width={64} />
			<img src="https://png.pngtree.com/png-clipart/20220109/original/pngtree-blue-purple-shooting-star-png-image_7026887.png" 
			className="top2 absolute top-0 right-[500px]" width={64} />
			<img src="https://png.pngtree.com/png-clipart/20220109/original/pngtree-blue-purple-shooting-star-png-image_7026887.png" 
			className="top3 absolute top-0 left-0 -rotate-90 animate-pulse animate" width={64} />


				<div className="flex flex-col gap-2">
						<h2>Quantos planetas terrestres existem no sistema solar?</h2>
						<ul>
							{["4","7","3","6"].map((option, index) => (
								<li key={index}>
									<label className='flex gap-2'>
										<input
											type="radio"
											value={option}
											checked={selectedOption === option}
											onChange={() => setSelectedOption(option as any)}
										/>
										{option}
									</label>
								</li>
							))}
						</ul>
					</div>
				
				

			<Question handleAnswer={()=> console.log('res')} question={"Quantos planetas terrestres existem no sistema solar?"} options={["4","7","3","6"]} />
			
			<div className="flex flex-col gap-4">
					{question.map(item=> 
							<Question handleAnswer={()=> console.log('res')} question={item.question} options={item.options} />
						)}
					</div>
	
<ContactForm />
		</section>
	);
}
