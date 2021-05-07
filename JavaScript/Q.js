// run promise in a loop
function runPromis() {
    let promises = [];
    _.forEach(lists, (list) => {
        promises.push(this.getDataDetail(appInstallation, {
            appToken: token,
            listId: list.id
        }));
    })

    return Q.all(promises)
        .then((response) => {
            let contacts = [];
            _.forEach(response, (res) => {
                contacts.push(res);
            });
            return contacts;
        });
}