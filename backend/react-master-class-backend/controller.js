class Data{
    static get = async (req,res) => {
        let arr = [
            {
              id: 1,
              title: "jaffar",
              flag: true,
            },
            {
              id: 2,
              title: "jaffar1",
              flag: false,
            },
            {
              id: 3,
              title: "jaffar2",
              flag: true,
            },
          ];
        console.log('hello');
        return res.status(200).json(arr);
    }
}

export default Data;