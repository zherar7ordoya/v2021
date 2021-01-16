import * as React from 'react'
import ReactDOM from 'react-dom'

/*
const Tabs = ({ children }) => (
    <div id="tab-container" className="tab-container">

        <div>{children}</div>

    </div>
);
*/


class Tabs extends React.Component {
    componentDidMount() {
        this.easytabs();
    }

    easytabs(){
      $(this.refs.easytabs).easytabs();
    }

    render() {
        return (
            <div id="tab-container" className="tab-container"></div>
        )
    }
}

/*
ReactDOM.render(
    <Tabs />,
    document.getElementById('tab-container')
);
*/

if (typeof window !== 'undefined') {
    ReactDOM.render(<Tabs />, document.getElementById("tab-container"));
}



export default Tabs