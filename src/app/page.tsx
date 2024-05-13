'use client'
import Question from "@/components/Quiz";
import ContactForm from "@/components/FormContact";
import { question } from "@/config/quiz";
import { Input } from "@/components/Input";
import { title } from "@/components/primitives";


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

			<p className={title({
				color: 'violet',
				size: 'lg',
				fullWidth: true,
				className: ' text-end'
			})}>Vitor</p>

			
			<form action="" className="flex flex-col gap-4">
				<Input label="Nome" type="text"  />
				<Input label="email" type="email" />
				<Input label="senha" type="password"  />
			<button>Enviar</button>
			</form>
			<div className="flex flex-col gap-4">
				{question.map(item=> 
					<Question handleAnswer={()=> console.log('res')} question={item.question} options={item.options} />
				)}</div>
				<ContactForm />
		</section>
	);
}
