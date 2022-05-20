import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTeams } from "../../shared/store/slices/appSlice";
import { RootState } from "../../shared/store/store";
import * as TempoService from "../../shared/services/tempoService";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import "./Teams.css";

const Teams = () => {
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
        <>
            <Link to="/users">Search users</Link>
            <div className="card-container">
                {teams?.map((team) => (
                    <Card id={team.id} name={team.name} />
                ))}
            </div>
        </>
    );
};

export default Teams;
