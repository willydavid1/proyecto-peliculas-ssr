import Header from './Header'


export default function Layout(props) {
  return (
    <div>
      <Header />

      {props.children}

      <style jsx global>{`
        
        *{
          margin: 0;
          padding: 0;
          list-style: none;
          text-decoration: none;
          border: none;
          outline: none;
        }

      `}</style>
    </div>
  )
}
