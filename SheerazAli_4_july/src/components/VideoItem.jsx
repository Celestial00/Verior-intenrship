const VideoItem = () => {
  return (
    <div className=" ">
      <div className="relative ">
        <img
          className="rounded-sm aspect-video"
          src={
            "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2400/https://blog.snappa.com/wp-content/uploads/2023/01/YT-Thumbnail-Blog-Post.jpg"
          }
        />
      </div>

      <div className="flex gap-3 py-3 px-2">
        <img
          className="h-9 w-9 rounded-sm"
          src={
            "https://www.adobe.com/creativecloud/design/discover/media_1c66507b68db7c7927c0f978345701fe0b2200583.png?width=2000&format=webply&optimize=medium"
          }
        />
        <div>
          <h2 className=" font-semibold leading-snug line-clamp-2 dark:text-neutral-300">
            "making a boat out of paper"
          </h2>
          <p className="text-sm mt-1 text-neutral-700 hover:text-neutral-500 dark:text-neutral-300">
            "cool aid"
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            20k Views • 2 months ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
