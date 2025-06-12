"use client";
import { director, Staff } from "@/types";
import { getDetailsDirector } from "@/utils/getDetailsDirector";
import { useEffect, useState } from "react";


export const DetailsDirector = ({ id }: {id: string}) => {
  const [directors, setDirector] = useState<director[]>([]);
  const [writers, setWriters] = useState<director[]>([]);
  const [casts, setCasts] = useState<string[]>([]);
  // console.log(casts)
  useEffect(() => {
    if (!id) return;
    const fetchdDirector = async () => {
      try {
        const data: Staff = await getDetailsDirector(id);
        console.log("Raw director data:", data);

        const isDirector = data?.crew?.filter(
          (person) => person.job === "Director"
        );

        const isWriter = data?.crew?.filter(
          (person) => person.department === "Writing"
        );
        const writers = isWriter.slice(0, 1);

        console.log("data", data.cast);
        
        const isStar = data?.cast?.slice(0, 3)
        .map((actor)=>actor.name);
        console.log("is star", isStar);
      

        setDirector(isDirector);
        setWriters(writers);
        setCasts(isStar)
      } catch (error) {
        console.error("Failed to fetch directors:", error);
      }
    };

    fetchdDirector();
  }, [id]);
  return (
    <table className="pt-5 mx-5 md:mx-0 table-fixed w-full">
      <tbody className="border-b border-gray-300 divide-y">
        <tr className="text-left">
          <th className="pb-1 pt-5">Director</th>
          {directors.map((person) => (
            <td key={person.id} className="pb-1 pt-5">{person.name}</td>
          ))}
        </tr>
        <tr className="text-left">
          <th className="pb-1 pt-5 ">Writers</th>
         {writers.map((person)=> (
           <td key={person.id} className="pb-1 pt-5">
            {person.name}
          </td>
         ))}
        </tr>
        <tr className="text-left">
          <th className="pb-1 pt-5">Stars</th>
          {casts.map((item, index)=>(
            <td key={index} className="pb-1 pt-5">
            {item}
          </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
