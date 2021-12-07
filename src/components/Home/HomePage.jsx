export default function HomePage() {
  return (
    <div className ='m-16 text-center space-x-2'>
      <h1 className='font-bold text-3xl'>Bem vindo ao React JSONPlaceholder!</h1>
      <p className='mt-3 text-xl'>Esta aplicação tem por objetivo demonstrar a utilização do react no consumo de uma api-rest</p>
      <p className='mt-3 text-xl'>A api utilizada encontra-se no link: <a className='font-bold leading-snug hover:opacity-75' href='https://jsonplaceholder.typicode.com/'>JSONPlaceholder</a></p>
      <p className='mt-3 text-xl'>Par dar inicio a utilização da aplicação, navegue pelos items do menu na parte superior da tela</p>

    </div>
  )
};