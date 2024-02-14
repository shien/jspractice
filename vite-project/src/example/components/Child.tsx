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
      <div>
        <h3>Child Component</h3>
      </div>
      <h3>{ matome.num }</h3>
      <h3>{ matome.bool ? 'true' : 'false'}</h3>
      <h3>{ matome.obj.name }</h3>
    </>
  )
}

// POINT コンポーネントを default export
export default Child