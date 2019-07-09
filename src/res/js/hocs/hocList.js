import React from 'react'

const hocList = Component => {
    return props => {
        if (props.alert === 'search') {
            ;
            return (
                <div className="loader-contact">
                    <p className="">Searching</p>
                    <div className="spinner-cf">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )
        }
        else {
            return <Component {...props} />
        }
    };
};
export default hocList