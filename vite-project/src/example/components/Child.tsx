import './Child.css'

interface TypeMatome {
  color: string;
  num: number;
  fn: (arg: string) => string;
  bool: boolean;
  obj: any;
}

const Child = (matome: TypeMatome) => {
  return (
    <>
      <h1>Child Component</h1>
      <h3>{ matome.num }</h3>
      <h3>{ matome.bool ? 'true' : 'false'}</h3>
      <h3>{ matome.obj.name }</h3>
    </>
  )
}

// POINT コンポーネントを default export
export default Child