import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

import {
    createStyles,
    Theme,
    withStyles,
    WithStyles
} from "@material-ui/core/styles";

function styles(theme: Theme) {
    return createStyles({
        root: {
            paddingTop: theme.spacing(8)
        }
    });
}

interface Props {
    children?: React.ReactNode;
}

class Index extends React.Component<Props & WithStyles<typeof styles>> {

    constructor(props: Props & WithStyles<typeof styles>) {
        super(props);
    }

    public render() {
        const title="Sample";
        return (
            <div>
                <Header title={title} />
                <Header title={"Thank you"} />
                <Footer />
            </div>
        );
    }
}

export default withStyles(styles)(Index);