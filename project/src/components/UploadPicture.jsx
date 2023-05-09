import { Button } from "./Button";

export const UploadPicture = () => {
  return (
    <div className="container--upload">
      <form method="post">
        <label htmlFor="file">
          <span className="sr-only">Choose picture to upload</span>
        </label>
        <input
          type="file"
          className="input--upload"
          id="file"
          name="file"
          accept=".jpg, .jpeg, .png"
        />

        <button className="button--upload">+ Upload Picture</button>
      </form>
    </div>
  );
};
