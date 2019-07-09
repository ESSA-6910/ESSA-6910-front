import React from 'react'

const withLoadingAddStudent = Component => {
    return props => {
        if (!props.isClicked) return <Component {...props} />;
        return (
            <div className="loader-contact">
                <p className="">Registration</p>
                <div className="spinner-cf">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    };
};
export default withLoadingAddStudent