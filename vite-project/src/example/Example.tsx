import Child from "./components/Child.tsx"
import Expression from "./components/Expression.tsx"

const Example = () => {
    const hello = (arg: string) => `Hello ${arg}`;
    type helloJE = "こんにちは" | "Hello";
    const helloJ :helloJE = "こんにちは";
    const obj = { name: "Tom"}
    return (
        <>
            <div>{helloJ}</div>
            <Child
                // POINT propsには全てのタイプの値を渡すことができます。
                color="blue"
                num={5}
                fn={hello}
                bool={false}
                obj={obj} />
            <Expression />
        </>
    );
}

export default Example
