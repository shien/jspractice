import React from "react";

type HelloProps = {
    text?: string
    children: React.ReactNode
}
// ハテナをつけると、props がわたってきてもわたってこなくても
// よくなる
// React18からは、children: React.ReactNode は明示的に渡しておく必要がある

const HelloTS: React.FC<HelloProps> = (props) => {
    // React 17 以前は React VFC
    return <h1>Hello React FC {props.text} ! {props.children} </h1>
};

type FnProps = {
    fn: (text: string) => void
}

export const Btn: React.FC<FnProps> = (props) => {
    return <button onClick={() => props.fn('TypeScript')}>ボタン</button>
}

export default HelloTS;