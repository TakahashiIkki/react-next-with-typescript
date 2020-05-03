import React from "react";

import Title from "./header/title";

type Props = {
    title: string
}

export default class Header extends React.Component<Props> {
    render() {
        return (
            <div>
                <Title title={this.props.title}/>
            </div>
        );
    }
}