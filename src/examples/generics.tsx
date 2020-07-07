import React,{useState,useEffect} from 'react'

type FauxactFunctionComponent<Props extends {}> =(props: Props, context?: any) => FauxactFunctionComponent<any> | null | JSX.Element

interface IDateProps{
    iso8601Date:string
    message:string
}

const DateComponent: FauxactFunctionComponent<IDateProps> = (props) => <time dateTime={props.iso8601Date}>{props.message}</time>


interface FauxactClassComponent<Props extends {}, State = {}> {
    props: Props
    state: State
  
    setState: (prevState: State, props: Props) => Props
    callback?: () => void
    render(): FauxactClassComponent<any> | null
  }


  export interface IProps {
    name: string;
    priority?: boolean
  }

  const PrintName: React.FC<IProps> = (props) => {
    return (
      <div>
        <p style={{ fontWeight: props.priority ? "bold" : "normal" }}>{props.name}</p>
      </div>
    )
  }

  const ShowUser: React.FC<IProps> = (props) => {
    return <PrintName name="Ned" />
  }

const Generics = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
      });
    return(
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    )
}


export default Generics;