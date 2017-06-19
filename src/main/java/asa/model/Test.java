

package asa.model;


public class Test {


	private String id;

	private String name;

	private String stress;


	public Test() {
	}


	public Test(String id, String name, String stress) {
		super();
		this.id = id;
		this.name = name;
		this.stress = stress;
	}


	public String getId() {
	return id;
	}


	public void setId(String id) {
	this.id = id;
	}

	
	public String getName() {
	return name;
	}

	
	public void setName(String name) {
	this.name = name;
	}

	
	public String getStress() {
	return stress;
	}

	
	public void setStress(String stress) {
	this.stress = stress;
	}
	
	@Override
	public String toString(){		
		return "Test:["+this.name+"]";
	}

}
