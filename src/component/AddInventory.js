import React from 'react';

class AddInventory extends React.Component {
    render() {
        return (
            <div className={"inventory"}>
                <p className={"title has-text-centered"}>Inventory</p>
                <br/>
                <div className={"button"} onClick={() => {
                    this.props.close('AddInventory Data');
                }}>
                    Cancel
                </div>
            </div>
        );
    }
}

export default AddInventory;