import React from "react";
import { Button } from "react-bootstrap";

const NavigationButton = ({ goNext, goPrevious, selectedIndex, list, proceedNext }) => (
    <>
        <div className="navigateBtn">
            <Button disabled={selectedIndex === 0} onClick={goPrevious} className="btn btn-secondary">
                Anterior
            </Button>{" "}
            {selectedIndex !== list.length - 1 && (
                <Button onClick={goNext} disabled={!proceedNext} className="btn btn-secondary">
                    {selectedIndex !== list.length - 1 ? "Siguiente" : "Finish"}
                </Button>
            )}
        </div>
    </>
);

export default NavigationButton;