import React from "react";

const Skill = ({ skill }) => {
    const { name, img } = skill;

    return (
        <div className="mx-3 my-2">
            <img
                className="mx-2"
                src={img}
                style={{ width: "40px", height: "38px" }}
                alt=""
            />
            <figcaption className="mx-2">{name}</figcaption>
        </div>
    );
};

export default Skill;
