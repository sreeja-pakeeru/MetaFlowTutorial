from metaflow import FlowSpec, step


class HelloFlow(FlowSpec):
    @step
    def start(self):
        print("starting ...")
        self.next(self.hello)
    
    @step
    def hello(self):
        print("Metaflow")
        self.next(self.end)
    
    @step
    def end(self):
        print("ending ...")


if __name__ == '__main__':
    HelloFlow()