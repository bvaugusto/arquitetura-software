package br.pucminas.aulapratica.jee.trabalho_jee.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.pucminas.aulapratica.jee.trabalho_jee.entity.ClienteEntity;

public class ClienteRepository {

	@PersistenceContext
	private EntityManager em;

	public EntityManager getEm() {
		return em;
	}

	public ClienteEntity salvar(ClienteEntity cliente) {
		//Implementar a lógica para persistir um cliente na base de dados usando o EntityManager
		return null;
	}


}
