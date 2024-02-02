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
        setRows(Math.ceil(songsByDay.size/4));
        
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
        <main className="px-4 w-full max-w-6xl">
            <h2 className="text-center text-xl font-bold mb-2">
                {translateMonth(month)}
            </h2>
            <div className={`grid grid-cols-4 grid-rows-${rows} gap-x-4 gap-y-4`}>
                {Array.from(songsByDay).map(([day, songs], index) => (
                    <div key={day} className={`col-span-1 ${index % 4 !== 3 ? 'border-r' : ''} border-b border-gray-300`}>
                        <DayCard
                            dayData={songs}
                        />
                    </div>
                ))}
            </div>
        </main>
    );  
}