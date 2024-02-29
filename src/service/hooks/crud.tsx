export const PotyAPI = {
    param: {
        tenant: {
            id: '19379587-75b0-3aec-9717-46c6e26757e3',
            apiMasterKey: 'ed950147-a6fc-3d45-a69c-bfc55f414ae6',
        },
        baseAddress:'https://api.ycodify.com'
    },
    create: function (data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', PotyAPI.param.baseAddress+'/v2/persistence/c/s/no-ac', true);
        xhr.setRequestHeader("Content-Type", 'application/json');
        xhr.setRequestHeader("X-Tenant-Id", PotyAPI.param.tenant.id);
        xhr.setRequestHeader("X-API-Master-Key", PotyAPI.param.tenant.apiMasterKey);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                callback({
                    status: xhr.status,
                    content: xhr.response
                });
            }
        };
        // O objeto de dados posto na variável 'data' precisa 
        // ser posto sob a chave 'data' no JSON a seguir. Só 
        // então o command deve ser enviado à API de serviços 
        // da Ycodify
        xhr.send(JSON.stringify({
            'action': 'CREATE',
            'data': [data]
        }));
    },
    read: function (filter, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', PotyAPI.param.baseAddress+'/v2/persistence/q/s/no-ac', true);
        xhr.setRequestHeader("Content-Type", 'application/json');
        xhr.setRequestHeader("X-Tenant-Id", PotyAPI.param.tenant.id);
        xhr.setRequestHeader("X-API-Master-Key", PotyAPI.param.tenant.apiMasterKey);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                callback({
                    status: xhr.status,
                    content: xhr.response
                });
            }
        };
        // A consulta propriamente, posta na variável filter, 
        // precisa ser posta como um elemento de um vetor e 
        // só então deve ser enviada à API de serviços da 
        // Ycodify, como uma query.
        xhr.send(JSON.stringify([filter]));
    },
    update: function (data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', PotyAPI.param.baseAddress+'/v2/persistence/c/s/no-ac', true);
        xhr.setRequestHeader("Content-Type", 'application/json');
        xhr.setRequestHeader("X-Tenant-Id", PotyAPI.param.tenant.id);
        xhr.setRequestHeader("X-API-Master-Key", PotyAPI.param.tenant.apiMasterKey);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                callback({
                    status: xhr.status,
                    content: xhr.response
                });
            }
        };
        // O objeto de dados posto na variável 'data' precisa 
        // ser posto sob a chave 'data' no JSON a seguir. Só 
        // então o command deve ser enviado à API de serviços 
        // da Ycodify
        xhr.send(JSON.stringify({
            'action': 'UPDATE',
            'data': [data]
        }));
    },
    delete: function (data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', PotyAPI.param.baseAddress+'/v2/persistence/c/s/no-ac', true);
        xhr.setRequestHeader("Content-Type", 'application/json');
        xhr.setRequestHeader("X-Tenant-Id", PotyAPI.param.tenant.id);
        xhr.setRequestHeader("X-API-Master-Key", PotyAPI.param.tenant.apiMasterKey);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                callback({
                    status: xhr.status,
                    content: xhr.response
                });
            }
        };
        // O objeto de dados posto na variável 'data' precisa 
        // ser posto sob a chave 'data' no JSON a seguir. Só 
        // então o command deve ser enviado à API de serviços 
        // da Ycodify
        xhr.send(JSON.stringify({
            'action': 'DELETE',
            'data': [data]
        }));
    }
}