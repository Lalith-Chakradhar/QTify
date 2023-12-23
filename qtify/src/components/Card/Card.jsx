import React from 'react';
import styles from "./Card.module.css";
import {Tooltip, Chip} from "@mui/material";
import {Link} from "react-router-dom";

function Card({data, type}) {
    const getCard = (type) => {
        switch (type) {
            case "album": {
                const {image,likes,title,follows, songs, slug} = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                        <Link to="/album/${slug}">
                            <div className={styles.cardWrapper}> {/*Card wrapper with Main Card and Title */}
                                <div className={styles.card}> {/*Main Card Container*/}
                                    <img src={image} alt="Song" loading="lazy"/> {/*image div */}
                                    <div className={styles.banner}> {/*banner div*/}
                                    <Chip 
                                    label={`${follows} Follows`}
                                    size="small"
                                    className={styles.chip}/>
                                    </div>
                                </div>
                                <div className={styles.cardTitleWrapper}> {/*Title */}
                                    <p>{title}</p>
                                </div>
                            </div>
                        </Link>
                    </Tooltip>
                )
            }
    
            case "song": {
                const {image,likes,title} = data;
                return (
                    <div className={styles.cardWrapper}> {/*Card wrapper with Main Card and Title */}
                        <div className={styles.card}> {/*Main Card Container*/}
                            <img src={image} alt="Song" loading="lazy"/> {/*image div */}
                            <div className={styles.banner}> {/*banner div*/}
                                <div className={styles.pill}> {/*pill div */}
                                    <p>{likes} Likes</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardTitleWrapper}> {/*Title */}
                            <p>{title}</p>
                        </div>
                    </div>
                )
            }
    
            default: return (<></>);
        }
    }
    return getCard(type);
}

export default Card;