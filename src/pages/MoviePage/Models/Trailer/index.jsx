import { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";

import { BASE_URL, API_KEY } from "/src/api";

import useFetch from "/src/hooks/useFetch";
import Button from "/src/components/Button";
import Modal from "/src/components/Modal";

const Trailer = ({ movieId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 200);
  }, [isModalOpen]);

  const query = useQuery({
    queryKey: ["trailer", movieId],
    queryFn: () =>
      useFetch(`
    ${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`),
  });

  if (query.isLoading) return "loading";
  const trailer = query.data.results.find((video) => video.type === "Trailer");

  return (
    <>
      {isModalOpen && (
        <Modal
          trailer={trailer}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <Button.CTA text="Trailer" onClick={() => handleOpen()} />
    </>
  );
};

export default Trailer;
