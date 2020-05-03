import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

interface State {
    title: string;
}

class Index extends React.Component<State> {
    public state = {
        title: "Sample"
    };

    constructor(state: State) {
        super(state);
        this.state = {title: "Welcome"};
    }

    changeTitle(title: string) {
        this.setState({title});
    }

    public render() {
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                <Footer/>
            </div>
        );
    }
}

export default (Index);