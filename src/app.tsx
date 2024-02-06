import logo from './assets/logo-nlw-expert.svg'

export function App() { 
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert"/>
    
      <form className="w-full">
        <input 
          type="text" 
          placeholder='Busque em suas notas...'
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500 "
        /> 
      </form> 

      <div className='h-px bg-slate-700'/>

      <div className="grid grid-cols-3  gap-6 auto-rows-[250px]">    
        <div className="rounded-md bg-slate-700 p-5 space-y-3"> 
          <span className='text-sm font-medium text-slate-200'>
            Adicionar nota
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Grave uma nota em áudio que será convertida para texto automaticamente.
          </p> 
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden
        relative 
        "> 
          <span className='text-sm font-medium text-slate-300'>
          há 2 dias
          </span>
          <p className='text-sm leading-6 text-slate-400 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iure ex? Qui in rerum itaque cupiditate veritatis earum delectus ea consequatur assumenda, atque, similique eligendi maxime fuga ratione ipsam doloribus?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aut fugiat, iusto perspiciatis rem voluptate corrupti quasi necessitatibus eaque quisquam quae nihil ea natus voluptatem autem, commodi quibusdam expedita! Fugit!
          </p> 

          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60  to-black/0"/> 
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3"> 
          <span className='text-sm font-medium text-slate-300'>
            Adicionar nota
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            No app do NLW vamos criar um layout incrível, assim podemos entregar a melhor experiência para a comunidade.
            <br />
            Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio.
          </p> 
        </div>
      </div>
      
    </div> 
  )
}

 