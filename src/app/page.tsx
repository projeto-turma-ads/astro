'use client'
import Question from "@/components/Quiz";
import ContactForm from "@/components/FormContact";
import { question } from "@/config/quiz";
import { Input } from "@/components/Input";
import { title } from "@/components/primitives";
import { useState } from "react";


export default function Home() {
	const [step, setStep] = useState()
	return (
		<><div id="nav"></div>
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			
				<div className="flex flex-col gap-4">
					{question.map(item=> 
						<Question handleAnswer={()=> console.log('res')} question={item.question} options={item.options} />
					)}
				</div>
				<ContactForm />
		</section>
		</>
	);
}
