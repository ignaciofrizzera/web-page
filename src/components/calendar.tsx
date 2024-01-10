'use client'

import { useState, useEffect } from 'react';
import { Song } from "@/types/Song";
import { DayCard} from "@/components/day-card";

type CalendarProps = {
    month: number,
    data: Song[]
}

export function Calendar({month, data}: CalendarProps) {
    
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    const [songsByDay, setSongsByDay] = useState<Map<number, Song[]>>(new Map<number, Song[]>);
    const [rows, setRows] = useState(0);

    function splitSongsByDay() {
        const songsByDay = new Map<number, Song[]>(); // <Day Number, List of Songs played that day>
        data.forEach(song => {
            const currDay = new Date(song.playedAt).getDate();
            if (!songsByDay.has(currDay)) {
                songsByDay.set(currDay, []);
            }
            const daySongs = songsByDay.get(currDay);
            if (daySongs) {
                daySongs.push(song);
            }
        })
        
        // We display 3 songs per row.
        setRows(Math.ceil(songsByDay.size/3));
        
        return songsByDay;
    }

    function translateMonth(month: number) {
        return monthNames[month];
    }

    useEffect(() => {
        if (data) {
            setSongsByDay(splitSongsByDay());
        }
    }, [data]);

    return (
        <main className="px-3 py-8 w-full max-w-6xl">
            <h1 className="text font-bold text-center mb-2">
                {translateMonth(month)}
            </h1>
            <div className={`grid grid-cols-3 grid-rows-${rows} gap-x-3`}>
                {Array.from(songsByDay).map(([day, songs]) => (
                    <DayCard
                        key={day}
                        dayData={songs}
                    />
                ))}
            </div>
        </main>
    );   
}