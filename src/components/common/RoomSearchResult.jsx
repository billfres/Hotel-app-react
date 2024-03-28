import React, { useState } from "react";
import RoomCard from "../rooms/RoomCard";
import { Button, Row } from "react-bootstrap";
import RoomPaginator from "./RoomPaginator";
import { useTranslation } from "react-i18next";

const RoomSearchResults = ({ results, onClearSearch }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 3;
    const totalResults = results.length;
    const totalPages = Math.ceil(totalResults / resultsPerPage);
    const { t } = useTranslation(); 

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const paginatedResults = results.slice(startIndex, endIndex);

    return (
        <>
            {results.length > 0 ? (
                <>
                    <h5 className="text-center mt-5">{t("Search Results")}</h5>
                    <Row>
                        {paginatedResults.map((room) => (
                            <RoomCard key={room.id} room={room} />
                        ))}
                    </Row>
                    <Row>
                        {totalResults > resultsPerPage && (
                            <RoomPaginator
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                        <Button variant="secondary" onClick={onClearSearch}>
                            {t("Clear Search")}
                        </Button>
                    </Row>
                </>
            ) : (
                <p>{t('No results found')}</p>
            )}
        </>
    );
};

export default RoomSearchResults;