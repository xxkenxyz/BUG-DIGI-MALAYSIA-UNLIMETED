            });
            collector.on("collect", async (b) => {
                if(!b.deferred) await  b.deferUpdate();
                if(!player && !collector.ended) return collector.stop();
                if(player.state !== "CONNECTED") player.connect();

                if(b.customId === "s_one") {
                    player.queue.add(s.tracks[0]);
                        if(player && player.state === "CONNECTED" && !player.playing && !player.paused && !player.queue.size) await player.play();
 
                        if(msg) await msg.edit({embeds: [search.setDescription(`${emojiplaylist} **Added to queue** - [${s.tracks[0].title}](${s.tracks[0].uri}) \`${convertTime(s.tracks[0].duration, true)}\` • ${s.tracks[0].requester}`)]})
                } else if(b.customId === "s_two") {
                    player.queue.add(s.tracks[1]);
                    if(player && player.state === "CONNECTED" && !player.playing && !player.paused && !player.queue.size) await player.play();

                    if(msg) await msg.edit({embeds: [search.setDescription(`${emojiplaylist} **Added to queue** - [${s.tracks[1].title}](${s.tracks[1].uri}) \`${convertTime(s.tracks[1].duration, true)}\` • ${s.tracks[1].requester}`)]})
            
                } else if(b.customId === "s_three") {
                    player.queue.add(s.tracks[2]);
                    if(player && player.state === "CONNECTED" && !player.playing && !player.paused && !player.queue.size) await player.play();

                    if(msg) await msg.edit({embeds: [search.setDescription(`${emojiplaylist} **Added to queue** - [${s.tracks[2].title}](${s.tracks[2].uri}) \`${convertTime(s.tracks[2].duration, true)}\` • ${s.tracks[2].requester}`)]})
            
                } else if(b.customId === "s_four") {
                    player.queue.add(s.tracks[3]);
                    if(player && player.state === "CONNECTED" && !player.playing && !player.paused && !player.queue.size) await player.play();

                    if(msg) await msg.edit({embeds: [search.setDescription(`${emojiplaylist} **Added to queue** - [${s.tracks[3].title}](${s.tracks[3].uri}) \`${convertTime(s.tracks[3].duration, true)}\` • ${s.tracks[3].requester}`)]})
            
                } else if(b.customId === "s_five") {
                    player.queue.add(s.tracks[4]);
                    if(player && player.state === "CONNECTED" && !player.playing && !player.paused && !player.queue.size) await player.play();

                    if(msg) await msg.edit({embeds: [search.setDescription(`${emojiplaylist} **Added to queue** - [${s.tracks[4].title}](${s.tracks[4].uri}) \`${convertTime(s.tracks[4].duration, true)}\` • ${s.tracks[4].requester}`)]})
            
                }
 
            });

        }
        
    }
}
