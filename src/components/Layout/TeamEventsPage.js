import React from 'react'
import useAxiosFetch from "../../api/useAxiosFetch"
import { filterTeams, filterEvents } from "../../api/filterData"
import Spinner from "../../common/Spinner";
import "../../common/Spinner.css";
import MatchList from "../Layout/MatchList";

const TeamEventsPage = ({ baseUrl }) => {
    const {
        data,
        isLoading,
        hasError,
        errorMessage
    } = useAxiosFetch(baseUrl, {});

    if (hasError) return (
        <div>{errorMessage}</div>
    );

    const matches = filterEvents(data.events ? Object.values(data.events) : []);
    const teamList = filterTeams(data.participants ? Object.values(data.participants) : []);
    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : (
                    <MatchList events={matches} teamList={teamList} />
                )}

        </div>
    )
}

export default TeamEventsPage
