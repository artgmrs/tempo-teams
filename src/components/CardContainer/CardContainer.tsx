import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTeams } from "../../shared/store/slices/appSlice";
import { RootState } from "../../shared/store/store";
import Card from "../Card/Card";
import * as TempoService from "../../shared/services/tempoService";
import "./CardContainer.css"

const CardContainer = () => {
    const teams = useSelector((state: RootState) => state.app.teams);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchTeams() {
            const data = await TempoService.getTeams();
            if (data != null) {
                dispatch(updateTeams(data));
            }
        }

        fetchTeams();
    });

    return (
        <div className="card-container">
            {teams?.map((team) => (
                <Card id={team.id} name={team.name} key={team.id} />
            ))}
        </div>
    );
};

export default CardContainer;
