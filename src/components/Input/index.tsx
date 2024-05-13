
export const Input = ({
    label,
    ...props
}:{
    label: string
} & React.InputHTMLAttributes<HTMLInputElement> )=>{
    return (
        <label htmlFor="">{label}:
			<input {...props} className="border-red-500 border-[2px] hover:border-blue-500 focus:border-pink-500" />
		</label>
    )
}