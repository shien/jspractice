import Child from "./components/Child.tsx"
import Expression from "./components/Expression.tsx"

const Example = () => {
    const hello = (arg: string) => `Hello ${arg}`

    type helloJE = "こんにちは" | "Hello"
    const helloJ :helloJE = "こんにちは"

    const array1: string[] = ["a", "b", "c", "k"]

    const array2: readonly (string | number)[] = [1, "b", "c",4]
    const array3: Array<string> = ["b", "c"]

    const [,,a,b] = array1;

    function addtion(a: number, ...b: number[]): number {
        return a + b.reduce((a,b) => a + b, 0);
    }

    const obj = { name: "Tom"}
    return (
        <>
            <h1>Example Component</h1>
            <h2>{helloJ}</h2>
            <h2>配列:{array1.join(",")}</h2>
            <h2>数字と文字列の配列:{array2.join(",")}</h2>
            <h2>別の宣言方法:{array3}</h2>
            <h2>分割代入: {a} と {b}</h2>
            <h2>some method: { array1.some((a) => {return a == "a"}) ? 'true':'false'}</h2>
            <h2>{addtion(1,2,3,4,5,6)}</h2>
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
