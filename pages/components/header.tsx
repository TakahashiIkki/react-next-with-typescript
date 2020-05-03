import React from "react";

import Title from "./header/title";

type Props = {
    title: string,
    changeTitle: (title: string) => void
}

export default class Header extends React.Component<Props> {
    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <div>
                <Title title={this.props.title}/>
                <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}