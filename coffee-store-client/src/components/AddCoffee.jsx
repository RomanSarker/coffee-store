const AddCoffee = () => {
  return (
    <form>
      <div className="flex gap-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Coffee Name"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Available Quantity"
              className="input input-bordered"
            />
          </label>
        </div>
      </div>
    </form>
  );
};

export default AddCoffee;
