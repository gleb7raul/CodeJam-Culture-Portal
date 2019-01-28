import React from 'react';
import { withNamespaces } from 'react-i18next';
import authors from 'src/data';
import TimelineBlock from '../../components/TimeLineBlock';
import TimelineContent from '../../components/TimelineContent';
import TimelineDate from '../../components/TimelineDate';
import Works from '../../components/Works';
import Video from '../../components/Video';
import Map from '../../components/Map';
import styles from './Poet.scss';
import TimeLineBlockStyles from '../../components/TimeLineBlock/TimeLineBlock.scss';
import TimelineDateStyles from '../../components/TimelineDate/TimelineDate.scss';
import TimelineContentStyles from '../../components/TimelineContent/TimelineContent.scss';
import WorksStyles from '../../components/Works/Works.scss';
import VideoStyles from '../../components/Video/Video.scss';

class Poet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: authors.find(author => author.id === props.match.params.id),
      photo: null,
      gallery: [],
      countLoadedImgs: 0,
      isGalleryLoaded: false,
    };
  }

  componentDidMount() {
    this.isComponentMounted = true;
    const { author } = this.state;
    import(`src/images/photo/${author.photo}`).then(img => this.isComponentMounted && this.setState({ photo: img.default }));
    if (author.gallery) {
      author.gallery.forEach((src) => {
        import(`src/images/gallery/${src}`).then((img) => {
          const { countLoadedImgs } = this.state;
          const countLoadedImgsTmp = countLoadedImgs + 1;
          if (this.isComponentMounted) {
            const { gallery } = this.state;
            this.setState({
              gallery: gallery.concat(img.default),
              countLoadedImgs: countLoadedImgsTmp,
              isGalleryLoaded: countLoadedImgsTmp === author.gallery.length,
            });
          }
        });
      });
    }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  render() {
    const { t } = this.props;
    const {
      author: {
        bio, works, video, id, map,
      },
      photo,
      isGalleryLoaded,
      gallery,
    } = this.state;
    return (
      <div className={styles.wrapper}>
        <p className={styles.aphtor}>
          {t(`name${id}`)}
        </p>
        <div>{photo && <img src={photo} alt="Poet" />}</div>
        <div className={styles.timeline}>
          {bio.map(({ dataText, description }) => (
            <TimelineBlock key={dataText} className={TimeLineBlockStyles.timeLineBlockWrapper}>
              <TimelineDate
                className={TimelineDateStyles.timeLineDateWrapper}
                dataText={dataText}
              />
              <TimelineContent
                className={TimelineContentStyles.timeLineContentWrapper}
                description={description}
              />
            </TimelineBlock>
          ))}
        </div>
        {works.map(({ date, title }) => (
          <Works key={title} date={date} title={title} className={WorksStyles.worksWrapper} />
        ))}
        <p className={styles.galleryname}>GALLERY</p>
        <div className={styles.gallerywrapper}>
          {isGalleryLoaded && gallery.map(img => (
            <div key={img}>
              <img style={{ height: '300px', width: '400px' }} src={img} alt="galleryItem" />
            </div>
          ))}
        </div>
        <Video video={video} id={id} className={VideoStyles.videoWrapper} />
        <div className={styles.mapwrapper}>
          <Map
            width={950}
            height={500}
            mapState={{ center: map.center, zoom: 10 }}
            markGeometry={map.markGeometry}
          />
        </div>
      </div>
    );
  }
}

export default withNamespaces()(Poet);
